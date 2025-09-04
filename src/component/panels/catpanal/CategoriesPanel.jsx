import './categorypanal.css'
import React, { useEffect, useState } from "react";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../../Apis/api";
import { Table, Button, Modal, Form, Spinner } from "react-bootstrap";

const CategoriesPanel = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategories(token);
      setCategories(res.data || []);
    } catch (error) {
      console.error(error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(e.target)
  };



  const resetForm = () => {
    setFormData({ title: "", description: "" });
    setSelectedCategory(null);
  };


  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
     let ct= await addCategory(token, formData);
     console.log(ct)
      setShowAddModal(false);
      fetchCategories();
      resetForm();
    } catch (error) {
      console.error("Add category error:", error);
    }
  };

  const handleEditCategory = async (e) => {
    e.preventDefault();
    if (!selectedCategory) return;
    try {
      await updateCategory(token, selectedCategory._id, formData);
      setShowEditModal(false);
      fetchCategories();
      resetForm();
    } catch (error) {
      console.error("Edit category error:", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;
    try {
      await deleteCategory(token, id);
      fetchCategories();
    } catch (error) {
      console.error("Delete category error:", error);
    }
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setFormData({
      title: category.title || "",
      description: category.description || "",
    });
    setShowEditModal(true);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Categories Management</h3>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          + Add Category
        </Button>
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category._id}>
                  <td>{category.title}</td>
                  <td>{category.description}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => openEditModal(category)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteCategory(category._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCategory}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditCategory}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CategoriesPanel;
