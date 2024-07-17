import React from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    const element = document.documentElement;

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            element.classList.add('dark');
            element.classList.remove('light');
        } else {
            element.classList.add('light');
            element.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="flex items-center">
            {/* Assuming you have a cart button here */}
            <button className="cart-button">

            </button>
            <img 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                src={theme === 'dark' ? DarkButton : LightButton} 
                alt={theme === 'dark' ? 'dark' : 'light'}
                className={`w-12 cursor-pointer transition-all duration-300 ml-4`} 
            />
        </div>
    );
};

export default DarkMode;