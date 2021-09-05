function metricConverter(input) {
    let num = Number(input[0]);
    let m_input = input[1];
    let m_output = input[2];

    let converter = 0;

    if(m_input == 'mm' && m_output == 'm') converter = num / 1000
    else if(m_input == 'mm' && m_output == 'cm') converter = num / 10;

    else if(m_input == 'm' && m_output == 'mm') converter = num * 1000;
    else if(m_input == 'm' && m_output == 'cm') converter = num * 100;

    else if(m_input == 'cm' && m_output == 'm') converter = num / 100;
    else if(m_input == 'cm' && m_output == 'mm') converter = num * 10;

    console.log(converter.toFixed(3));
}