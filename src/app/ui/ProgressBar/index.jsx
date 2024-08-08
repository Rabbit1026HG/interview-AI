const progress = [
  {
    title: "Step1",
    width: "20px",
  },
  {
    title: "Step2",
    width: "34%",
  },
  {
    title: "Step3",
    width: "66%",
  },
  {
    title: "Step4",
    width: "100%",
  },
];

export default function ProgressBar({ step }) {
  return (
    <div>
      <div className="d-flex justify-content-between ">
        {progress.map((item, index) =>
          step == index ? (
            <p key={index} className="cs-accent_color">
              {item.title}
            </p>
          ) : (
            <p key={index}>{item.title}</p>
          )
        )}
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar cs-accent_bg"
          style={{ width: progress[step].width }}
        ></div>
      </div>
    </div>
  );
}
