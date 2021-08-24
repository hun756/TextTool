/**
 *  @file line_number.cpp
 *  @author Mehmet Ekemen <ekemenms@gmail.com>, <ekemenms@hotmail.com>
 *  @brief 
 *  @version 0.1
 *  @date 2021-08-03
 *  
 *  @copyright Copyright (c) 2021
 *  
 *  @link https://leaningtech.com/cheerp/
**/

#include <string>
#include <cheerp/clientlib.h>
#include <cheerp/client.h>

/**
 *  @brief 
 *      Application Starting Point
 */
void webMain()
{

    client::HTMLInputElement *inputElement =
        static_cast<client::HTMLInputElement *>(client::document.getElementById("inputText"));

  
    client::Element *resultElement = client::document.getElementById("result");


    inputElement->addEventListener(
        "input",
        cheerp::Callback([inputElement, resultElement]() -> void
                        {
                            client::String *text = inputElement->get_value();

                            client::RegExp *regex = new client::RegExp("\r\n|\r|\n");

                            auto lines = text->split(regex);

                            int count = lines->get_length();

                            std::string _resStr = "Lines of number is : " + std::to_string(count);
                            resultElement->set_textContent(_resStr.c_str());
                        }
        )
    );
}