class AdressView{
    constructor() {
        throw new Error("This class does not support object instancing.")
    }
    
    static templateView(adressObj){
        return `
        <div class="input-container">
        <input type="text" id="inputAdress" required="" value="${adressObj.adress}">
            <label for="inputAdress">Adress</label>
                                                    </div>
        <div class="input-container">
            <input type="text" id="inputComplement" required="" value="${adressObj.complement}">
                <label for="inputComplement">Complement</label>
                                                    </div>
            <div class="input-container">
                <input type="text" id="inputDistrict" required="" value="${adressObj.district}">
                    <label for="inputDistrict">District</label>
                                                    </div>
                <div class="input-container">
                    <input type="text" id="inputLocality" required="" value="${adressObj.locality}">
                        <label for="inputLocality">Locality</label>
                                                    </div>
                    <div class="input-container">
                        <input type="text" id="inputState" required="" value="${adressObj.state}">
                            <label for="inputState">State</label>
                                                    </div>
                        <!--Slide control button-->
                                                    <div class="flexNav">
                            <a class="whitesmoke" data-slide="prev" href="#demo">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z" />
                                </svg>
                            </a>
                            <a class="whitesmoke" data-slide="next" href="#demo">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z" />
                                </svg>
                            </a>
                        </div>
                        <!--End of slide control button-->
        `
    }
}
