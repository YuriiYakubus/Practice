class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius = 0) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        let button = super.render();

        button.style.borderRadius = `${this.borderRadius}%`;
        button.style.display = 'block';
        return button;
    }
}

let modernButton = new ModernButton('100px', '50px', 'green', 'modernBtn', 50);

document.body.appendChild(modernButton.render());