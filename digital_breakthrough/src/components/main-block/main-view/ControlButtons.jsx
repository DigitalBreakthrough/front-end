import React from "react";

export default function ControlButtons() {
  return (
    <div>
      <button>Новая проверка</button>
      <div className="request-buttons">
        <button>Отмена</button>
        <button>Проверить</button>
      </div>
      <button>Скачать</button>
    </div>
  );
}
