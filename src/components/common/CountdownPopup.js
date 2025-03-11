import { useState, useEffect } from "react";

const CountdownPopup = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.plusdistribution.in/pdpl/sakshi/popup")
      .then((res) => res.json())
      .then((data) => {
        if (data.active) {
          setPopupContent(data.html);
          setIsOpen(true);
        }
      });
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div>
        <div dangerouslySetInnerHTML={{ __html: popupContent }} />
        <button
          onClick={closePopup}
          className="absolute top-2 right-3 text-gray-600"
        >
          ✖
        </button>
      </div>
    )
  );
};

export default CountdownPopup;
