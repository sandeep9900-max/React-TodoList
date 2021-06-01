import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Input, Table, Tag, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
let arr = [];

const ContactTodo = (props) => {
  console.log(props, "in file");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todoListArr, setTodoListArr] = useState([]);
  const [isArray, setISArray] = useState([
    {
      f_name: "",
      l_name: "",
      contact_no: "",
    },
  ]);

  const columns = [
    {
      title: "First name",
      dataIndex: "Fullname",
      key: "f_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last name",
      dataIndex: "l_name",
      key: "l_name",
    },
    {
      title: "Contact_no",
      dataIndex: "contact_no",
      key: "contact_no",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Space size="middle">
          <Button
            onClick={(e) => {
              return onPressEdit(text, index);
            }}
            icon={<EditOutlined />}
          ></Button>
          <Button
            onClick={(e) => {
              return DeleteArray(index, text);
            }}
            icon={<DeleteOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];

  const onPressEdit = (obj, idx) => {
    console.log(obj, "text");
    console.log(idx, "idx");
    setIsEdit(true);
    setEditIndex(idx);
    form.setFieldsValue({
      FirstName: obj.f_name,
      LastName: obj.l_name,
      ContactNumber: obj.contact_no,
    });
    setIsModalVisible(true);
  };

  const DeleteArray = (idx) => {
    window.confirm("Did you want to delete it!");
    console.log(todoListArr, "before");
    todoListArr.splice(idx, 1);
    console.log(todoListArr, "after");
    arr = [...todoListArr];
    return setTodoListArr(arr);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFormSubmit = (values) => {
    console.log("Success:", values);

    if (isEdit && editIndex != null) {
      todoListArr[editIndex].Fullname = `${values && values.FirstName} ${
        values && values.LastName
      }`;
      todoListArr[editIndex].f_name = `${values && values.FirstName}`;
      todoListArr[editIndex].l_name = `${values && values.LastName}`;
      todoListArr[editIndex].contact_no = `${values && values.ContactNumber}`;

      arr = [...todoListArr];
      form.resetFields();
      console.log(arr, "arr is<<<");
      setTodoListArr(arr);
      setIsModalVisible(false);
    } else {
      arr = [...todoListArr];
      arr.push({
        Fullname: `${values && values.FirstName} ${values && values.LastName}`,
        f_name: values && values.FirstName,
        l_name: values && values.LastName,
        contact_no: values && values.ContactNumber,
      });

      form.resetFields();

      console.log(arr, "arr is<<<");
      setTodoListArr(arr);
      setIsModalVisible(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showList = () => {
    return (
      <Table
        columns={columns}
        dataSource={todoListArr}
        // pagination={false}
        className="table"
      />
    );
  };
  const [form] = Form.useForm();

  return (
    <div className="table">
      <div className="container">
        <h2 className="header">Contact List</h2>
        <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
          Add Contact
        </Button>
        {isEdit ? (
          <Modal
            title="Edit contact"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFormSubmit}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="FirstName"
                name="FirstName"
                rules={[
                  { required: true, message: "Please input your FirstName!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="LastName"
                name="LastName"
                rules={[
                  { required: true, message: "Please input your LastName!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Contact-Number"
                name="ContactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact-Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                {isEdit ? (
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Modal>
        ) : (
          <Modal
            title="Add contact"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFormSubmit}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="FirstName"
                name="FirstName"
                rules={[
                  { required: true, message: "Please input your FirstName!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="LastName"
                name="LastName"
                rules={[
                  { required: true, message: "Please input your LastName!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Contact-Number"
                name="ContactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact-Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                {isEdit ? (
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Modal>
        )}
      </div>
      {isArray && isArray.length > 0 && showList()}
    </div>
  );
};

export default ContactTodo;
