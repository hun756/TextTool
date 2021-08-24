/**
 *  @file line_number_w.cpp
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

[[cheerp::jsexport]] [[cheerp::genericjs]] void countLineNumber(
    client::HTMLInputElement* inputElem, 
    client::Element* resultElem ) {

    inputElem->addEventListener(
        "input",
        cheerp::Callback([inputElem, resultElem]() -> void
                        {
                            client::String *text = inputElem->get_value();

                            client::RegExp *regex = new client::RegExp("\r\n|\r|\n");

                            auto lines = text->split(regex);

                            int count = lines->get_length();

                            std::string _resStr = "Lines of number is : " + std::to_string(count);
                            resultElem->set_textContent(_resStr.c_str());
                        }
        )
    );
}

void webMain()
{
}