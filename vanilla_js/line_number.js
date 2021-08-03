/**
 *  File        :   line_number.js
 *  Explain     :   Calculates the line number of the text given as input.
 *  Author      :   Mehmet Ekemen
 *  Nickname    :   `hun
 *  Email       :   ekemenms@hotmail.com
 *  Date        :   08-03-2021 (MM-DD-YYYY)  (Updated)
 *  Github      :   github.com/hun756
 *  Resource    :   https://github.com/hun756/TextTool
**/


/**
 *  @brief
 *      This function calculates the number of lines 
 *      in the element containing the given text as input.
 * 
 *  @param{inputElement}
 *      An input element is an element that contains text. 
 *      The value in this item will be processed by the program.     
 * 
 *  @param{resultElement} 
 *      Line number produces a value of type "number". 
 *      This generated value is printed in the 
 *      content of the "resultElement".
**/
let lineNumber = (inputElement, resultElement) => {
    inputElement.addEventListener('input', () => {
        let text = inputElement.value;
    
        let lines = text.split(/\r|\r\n|\n/);
        let count = lines.length;
    
        resultElement.textContent = `Total Line Number is : ${count}`;
    });
}