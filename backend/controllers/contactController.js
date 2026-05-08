const sql = require('mssql');
const { poolPromise } = require('../config/db');

// Create new contact request
const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // Validation
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ thông tin'
      });
    }

    const pool = await poolPromise;
    const result = await pool.request()
      .input('fullName', sql.NVarChar, fullName)
      .input('email', sql.NVarChar, email)
      .input('phone', sql.NVarChar, phone)
      .input('message', sql.NVarChar, message)
      .query(`
        INSERT INTO ContactRequests (fullName, email, phone, message, status)
        VALUES (@fullName, @email, @phone, @message, N'Mới')
      `);

    res.status(201).json({
      success: true,
      message: 'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm.'
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
      error: error.message
    });
  }
};

// Get all contact requests
const getAllContacts = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('SELECT * FROM ContactRequests ORDER BY createdAt DESC');

    res.json({
      success: true,
      data: result.recordset
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi tải danh sách liên hệ',
      error: error.message
    });
  }
};

// Update contact status
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('status', sql.NVarChar, status)
      .query('UPDATE ContactRequests SET status = @status, updatedAt = GETDATE() WHERE id = @id');

    res.json({
      success: true,
      message: 'Cập nhật trạng thái thành công'
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi khi cập nhật trạng thái',
      error: error.message
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  updateContactStatus
};
