import css from "./Notification.module.css";

export default function Notification() {
  return (
    <div>
      <p className={css.message}>No feedback yet</p>
    </div>
  );
}