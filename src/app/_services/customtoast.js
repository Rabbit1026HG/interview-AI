const { toast } = require("react-toastify");

export { toastwarn, toasterror, toastsuccess, toastinfo };
const toastwarn = () =>
  toast.warning("text", {
    className: "black-background",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });

const toasterror = () => {
  return toast.error("text", {
    className: "black-background",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });
};
const toastsuccess = (text) =>
  toast.success(text, {
    className: "black-background",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });
const toastinfo = (text) =>
  toast.info(text, {
    className: "black-background",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });
