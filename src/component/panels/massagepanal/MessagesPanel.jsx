import React, { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../../../Apis/api";
import { Table, Button, Spinner } from "react-bootstrap";

const MessagesPanel = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await getContacts(token);
      setMessages(res.data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;
    try {
     let resp= await deleteContact(token, id);
     console.log(resp)
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Messages</h3>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.userName}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(msg._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MessagesPanel;
