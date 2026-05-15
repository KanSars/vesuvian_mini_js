import { useEffect, useState } from 'react';

import './cardCreatingTextarea.scss'

const textSizeStyles = {
  small: 'medium-small-text',
  big: 'btn-link-font-big',
}

// TODO сделать универсальным (пригодилось для тэгов)
const CardCreatingTextarea = ({ id, label, placeholder, value, onChange, textSize='big' }) => {
  const [actualPlaceholder, setActualPlaceholder] = useState(placeholder)
  const textSizeStyle = textSizeStyles[textSize];

  useEffect(() => {
    const textarea = document.getElementById(id);

    function adjustTextarea() {
      textarea.style.height = '0px'; // Сначала сбросим высоту

      var textHeight = textarea.scrollHeight - 4;
      textarea.style.height = textHeight + 'px';
    }

    textarea.addEventListener("input", function() {
      adjustTextarea();
    });

    // Вызовем функцию для начальной настройки
    adjustTextarea();
  }, [id, actualPlaceholder]);

  const onFocus = () => {
    setActualPlaceholder('');
  }

  const onBlur = () => {
    setActualPlaceholder(placeholder);
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={`centr-align-textarea ${textSizeStyle}`}
        placeholder={actualPlaceholder}
        value={value}
        onChange={onChange}
        style={{ height: '1em' }} // Начальная высота как одна строка
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

export {
  CardCreatingTextarea,
}