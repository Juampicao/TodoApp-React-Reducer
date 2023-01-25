import "./Modal.css";

const Modal = ({ children, isOpen, closeModal } : any) => {
  const handleModalContainerClick = (e: any) => e.stopPropagation();

  return (
    <>
      <article
        className={`modal   ${isOpen && "is-open"}`}
        onClick={closeModal}
      >
        <div
          className="modal-container rounded-xl b"
          onClick={handleModalContainerClick}
        >
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </article>
    </>
  );
};

export default Modal;
