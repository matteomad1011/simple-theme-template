export const LightTheme = {
    colors: {
        primary: 'black',
        background: 'white',
        // ...
    }
    // Spacing: {...}
    // Sizing: {...}
    // ...
}

export const DarkTheme = {
    // Extends LightTheme
    ...LightTheme,
    colors: {
        ...LightTheme.colors,
        primary: 'white',
        background: 'black'
    }
    // ...
}