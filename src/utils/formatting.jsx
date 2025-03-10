export const formatApiResponse = (text) => {
    // Replace markdown-like formatting with HTML tags
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Bold
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<i>$1</i>');   // Italics
    formattedText = formattedText.replace(/^-\s(.*?)$/gm, '<li>$1</li>'); // Bullets
    formattedText = formattedText.replace(/^(\d+)\.\s(.*?)$/gm, '<li>$2</li>'); // Numbered lists

    // Wrap lists in <ul> or <ol> tags
    if (formattedText.includes('<li>')) {
        // Check for numbered or bullet lists
        if (formattedText.match(/^\d+\.\s/m)) {
            formattedText = '<ol>' + formattedText.replace(/<li>/g, '<li>') + '</ol>';
        } else {
            formattedText = '<ul>' + formattedText.replace(/<li>/g, '<li>') + '</ul>';
        }
        formattedText = formattedText.replace(/<\/li>(\r\n|\n|\r)/g, '</li>');  //Remove line breaks after </li> tag
    }
    return formattedText;
};