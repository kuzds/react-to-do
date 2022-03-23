import React                                        from "react";
import { render, unmountComponentAtNode }           from "react-dom";
import { act }                                      from "react-dom/test-utils";

import App                                          from "./App";



describe("Testing App component", () => {

    let container = null;
    beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement("div");
    document.body.appendChild(container);
    });

    afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    });

    it("Should correct render ARM pages", () => {

    });

});












