
import React, { useEffect } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile, deleteAccount } from "../api";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Profile = ({ token }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        form.setFieldsValue({
          username: response.data.username,
          email: response.data.email,
        });
      } catch (error) {
        message.error("Error fetching profile");
      }
    };
    fetchProfile();
  }, [token, form]);

  const onUpdate = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    try {
      await updateProfile(values, token);
      message.success("Profile updated successfully");
    } catch (error) {
      message.error("Profile update failed");
    }
  };

  const onDelete = async () => {
    try {
      await deleteAccount(token);
      message.success("Account deleted successfully");
      navigate("/signup");
    } catch (error) {
      message.error("Error deleting account");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-10">
        <Title
          level={1}
          className="text-center text-indigo-700 font-bold mb-6 text-3xl"
        >
          Profile Settings
        </Title>
        <Text className="text-center  text-gray-500 mb-10 text-lg">
          Manage your profile information
        </Text>

        <Form
          form={form}
          onFinish={onUpdate}
          layout="vertical"
          className="space-y-8"
        >

          <Form.Item
            name="username"
            label={
              <span className="text-lg font-medium text-gray-700">
                Username
              </span>
            }
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              prefix={
                <UserOutlined
                  style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                />
              }
              placeholder="Enter your username"
              className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label={
              <span className="text-lg font-medium text-gray-700">
                Email Address
              </span>
            }
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input
              prefix={
                <MailOutlined
                  style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                />
              }
              placeholder="Enter your email"
              className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <span className="text-lg font-medium text-gray-700">
                New Password
              </span>
            }
            rules={[
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              prefix={
                <LockOutlined
                  style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                />
              }
              placeholder="Enter new password"
              className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label={
              <span className="text-lg font-medium text-gray-700">
                Retype New Password
              </span>
            }
            rules={[
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              prefix={
                <LockOutlined
                  style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                />
              }
              placeholder="Retype new password"
              className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </Form.Item>
          <div className="flex justify-between items-center mt-10 space-x-6">
            <Button
              type="default"
              onClick={onDelete}
              className="w-full py-3 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none transition-all duration-200"
            >
              Delete Account
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none transition-all duration-200"
            >
              Update Profile
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
