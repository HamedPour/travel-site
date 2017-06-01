import $ from 'jquery';


class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
    this.openModal();
    this.closeModal();
  }

  events(){
    // clicking the open modal btn
    this.openModalButton.click(this.openModal.bind(this));
    // clicking the x close modal btn
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key to exit
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }


  openModal() {
    this.modal.addClass("modal--is-visiable");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visiable");
  }
}

export default Modal;
