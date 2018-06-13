import React from "react";
import './css/footer.css';

export default () => {
  return (
    <footer className="text-white p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Dispatch
    </footer>
  );
};
