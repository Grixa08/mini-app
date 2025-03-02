import React from 'react';
import contest from "../img/contest.svg"

interface ContestDetailsProps {
  onBack: () => void;
}

const ContestDetails: React.FC<ContestDetailsProps> = ({ onBack }) => {
  return (
    <div>
    <div className="btn-exit">
      <button onClick={onBack} className="nav-btn-exit">←</button>
      <h2>Подробнее о конкурсе</h2>
    </div>

    <div className="contest-detalis">
        <h3>🌟 Большой конкурс: разработай будущее 🌟</h3>
        <p>Ура, друзья, мы рады объявить о старте большого конкурса!</p>
        <p>Как вы уже знаете, этот конкурс - идеальная возможность показать, чему вы научились за это время 🚀 
            👾 А проявите вы себя через создание личного кабинета участника проекта КОД</p>
    </div>
    <div className="contest-detalis">
      <img src={contest} alt="" />
    </div>

    <div className="contest-detalis" >
        <h3>🌟 ПРАВИЛА УЧАСТИЯ 🌟</h3>
        <p>📌 В конкурсе могут принять участие студенты всех курсов и всех направлений;</p>
        <p>📌 Вы можете принимать участие индивидуально или с командой до 3 человек. Участники команды должны быть с вашего курса и направления;</p>
        <p>📌 Для участия в конкурсе необходимо заполнить анкету. Регистрация будет открыта до 18 февраля включительно:  
        <a href="https://vk.com/app5619682_-209019783" target="_blank" rel="noopener noreferrer">
          https://vk.com/app5619682_-209019783
        </a>
      </p>
        <p>📌 Когда ваша работа будет готова, вам нужно отправить её нам на почту, подробнее прочитайте в регламенте, который прикреплён к этому посту
          В письме указывайте ФИО каждого из участников группы или индивидуального участника и номера ваших групп</p>
          <p>📌 Прием работ – до 3 марта включительно, почта 
          <a href="mailto:kodprog@russianleaders.org">
            kodprog@russianleaders.org
          </a>.
        </p>
        <p>📌 Вся информация о задании размещена в регламенте. Пожалуйста, внимательно с ним ознакомьтесь! В нём технические требования и критерии оценки!</p>
        <p>💫Участие в конкурсе может принести вам до 20 рейтинговых баллов💫</p>
        <p>❗❗️Обратите внимание, что для 1 курса и для 2-3 курсов разные регламенты. Ищите подробную информацию в прикрепленном файле</p>
        <p>Мы верим в вас,<br/>
          Удачи 💙</p>
   
    </div>
    </div>
  );
};

export default ContestDetails;