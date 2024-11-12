import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await login(values);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      message.success("Login successful");
      navigate("/profile");
    } catch (error) {
      message.error("Invalid login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-1/2 bg-white shadow-xl rounded-lg px-9 py-20">
        <div className="text-center mb-8">
          <img
            alt="Your Company"
            src="https://www.str8bat.com/cdn/shop/files/Logo.png?v=1677442424&width=500"
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-6 text-3xl font-semibold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Form form={form} onFinish={onFinish} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-2">
              <Form.Item
                name="email"
                rules={[{ required: true, type: "email" }]}
                noStyle
              >
                <Input
                  prefix={
                    <MailOutlined
                      style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                    />
                  }
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
              </Form.Item>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <Form.Item name="password" rules={[{ required: true }]} noStyle>
              <Input.Password
                prefix={
                  <LockOutlined
                    style={{ color: "#4F46E5", fontSize: "1.25rem" }}
                  />
                }
                id="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="py-3 px-5 text-lg border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </Form.Item>
          </div>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Sign In
            </Button>
          </div>
        </Form>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
