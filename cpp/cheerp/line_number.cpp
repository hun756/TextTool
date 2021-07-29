#include <string>
#include <cheerp/clientlib.h>
#include <cheerp/client.h>


void webMain()
{
    client::HTMLInputElement  *inputElement = static_cast<client::HTMLInputElement*>(client::document.getElementById("inputText"));


    client::Element *resultElement = client::document.getElementById("result");


    inputElement->addEventListener("input", cheerp::Callback([inputElement, resultElement]() -> void {

        client::String* text = inputElement->get_value();

        client::RegExp* regex(new client::RegExp("/\r|\r\n|\n/"));
        auto lines = text->split(regex);
        unsigned long long count = lines->get_length();

        std::string _resStr =  "Lines of number is" + std::to_string(count);
        resultElement->set_textContent(_resStr.c_str());
    }));
}