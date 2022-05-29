import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 50,
      color: "#fd2d01",
      position: "absolute",
      top: "50%",
      left: "50%",
    }}
    spin
  />
);

const Loader = (props) => {
  return <Spin indicator={antIcon} />;
};
export default Loader;
