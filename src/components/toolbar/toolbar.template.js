function toButton(button) {
    const json = `data-value='${JSON.stringify(button.value)}'`
    const meta = `data-type="button" ${json}`
    return `<div class="button ${button.active ? "active" : ""}" ${meta}>
        <i class="material-icons" ${meta}>${button.icon}</i>
    </div>`
}

export function createToolbar(state) {
    const keys = [
        {
            icon: 'format_align_left',
            active: state['textAlign'] === 'left',
            value: {textAlign: "left"}
        },
        {
            icon: 'format_align_center',
            active: state['textAlign'] === 'center',
            value: {textAlign: state['textAlign'] === 'center'?
                    "left" : "center"}

        },
        {
            icon: 'format_align_right',
            active: state['textAlign'] === 'right',
            value: {textAlign: state['textAlign'] === 'right'?
                    "left" : "right"}
        },
        {
            icon: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold'
                    ? "normal" : "bold"}
        },
        {
            icon: 'format_italic',
            active: state['fontStyle'] === 'italic',
            value: {fontStyle: state['fontStyle'] === 'italic'
                    ? "normal" : "italic"}
        },
        {
            icon: 'format_underline',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: state['textDecoration'] === 'underline'
                    ? "none" : "underline"}
        }
    ]
    return keys.map(toButton).join('')
}