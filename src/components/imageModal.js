import Modal from "react-modal";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
    },
  };

function ImageModal(props) {
    const { imageProps, showModal, setShowModal } = props;

    return (
        <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} style={customStyles}>
            <button class="absolute right-2 top-0 border-0 bg-transparent" onClick={() => setShowModal(false)}>x</button>
            {imageProps && (
                <>
                    <div class="h-100">
                    <img src={imageProps.image} alt="modal-img" class="w-full h-full" />
                </div>
                <div class="h-20">
                    <h2 class="text-3xl font-bold my-3">{imageProps.title}</h2>
                    <p>{imageProps.description}</p>
                </div>
                </>
            )}
        </Modal>
    )
}

export default ImageModal;