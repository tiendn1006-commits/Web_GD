const sql = require('mssql');
const { poolPromise } = require('../config/db');

// Get all courses with pagination
const getCourses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const pool = await poolPromise;
    
    // Get total count
    const countResult = await pool.request()
      .query('SELECT COUNT(*) as total FROM Courses WHERE isActive = 1');
    
    const total = countResult.recordset[0].total;

    // Get courses with pagination
    const result = await pool.request()
      .input('limit', sql.Int, limit)
      .input('offset', sql.Int, offset)
      .query(`
        SELECT 
          id, title, description, instructor, duration, 
          level, price, image, category, students, rating
        FROM Courses 
        WHERE isActive = 1
        ORDER BY createdAt DESC
        OFFSET @offset ROWS
        FETCH NEXT @limit ROWS ONLY
      `);

    res.json({
      success: true,
      data: result.recordset,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi tải danh sách khóa học',
      error: error.message
    });
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await poolPromise;
    
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Courses WHERE id = @id AND isActive = 1');

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy khóa học'
      });
    }

    res.json({
      success: true,
      data: result.recordset[0]
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi tải thông tin khóa học',
      error: error.message
    });
  }
};

module.exports = {
  getCourses,
  getCourseById
};
