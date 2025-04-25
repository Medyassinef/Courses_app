const pool = require('../config/db');

module.exports = {
  // Get all courses
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM courses ORDER BY createdAt DESC');
    return rows;
  },

  // Create new course
  create: async (title, description, teacher) => {
    const [result] = await pool.query(
      'INSERT INTO courses (title, description, teacher) VALUES (?, ?, ?)',
      [title, description, teacher]
    );
    return { id: result.insertId, title, description, teacher };
  },

  // Update course
  update: async (id, title, description, teacher) => {
    await pool.query(
      'UPDATE courses SET title = ?, description = ?, teacher = ? WHERE id = ?',
      [title, description, teacher, id]
    );
  },

  // Delete course
  delete: async (id) => {
    await pool.query('DELETE FROM courses WHERE id = ?', [id]);
  }
};