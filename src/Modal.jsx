export default function Modal({ children, isOpen, showClose, title, handleClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="dialog-header">
                    <div></div>
                    <h1>{title}</h1>
                    {showClose && <button onClick={handleClose}>X</button>}
                </div>
                {children}
            </div>
        </div>
    );
}
