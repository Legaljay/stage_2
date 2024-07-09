import { toast } from "react-toastify";

const toastConfig = {
  position: "top-right",
  autoClose: 4000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "light",
};

const info = (message, options) => {
  toast.info(message, { ...toastConfig, ...options });
};

const success = (message, options) => {
  toast.success(message, { ...toastConfig, ...options });
};

const error = (message, options) => {
  toast.error(message, { ...toastConfig, ...options });
};

const warning = (message, options) => {
  toast.warning(message, { ...toastConfig, ...options });
};

const notificationUtil = { info, success, error, warning };

export default notificationUtil;
