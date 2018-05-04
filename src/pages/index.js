import "./less/index.less"
import React from "react"
import graphql from 'graphql';
import { withPrefix } from 'gatsby-link'
import Slider from '../components/slider'
import AboutUs from '../components/about-us'
import PersonsList from '../components/persons-list'
import Numbers from '../components/numbers'
import News from '../components/news'

const volunteers = [{
  name: 'Маріанна',
  description: `Привіт усім<br />
    Мене звати Маріанна.<br />
    Працюю в початковій школі, де веду урок театрального мистецтва. Вивчаю польську мову і відвідую курси казкотерапії. Мрію навчитися грати на фортепіано. Заміжня і у нас росте чудовий син.<br />
    Люблю подорожувати, особливо мотоподорожі.`,
  photo: '/img/volunteers/marianna.jpg'
}, {
  name: 'Іра Марущак',
  description: `Вітання ✋🏻<br /><br />

  Я Іра Марущак, студентка, мені 21 рік, навчаюсь на 5 курсі за спеціальністю "соціологія" в ЛНУ Франка. Вирішила долучитись до цього проекту, бо вже давно відчула, що хочу допомагати людям, але не знала яким чином це можна зробити.`,
  photo: '/img/volunteers/ira_m.jpg'
}, {
  name: 'Наталка Аврамчук',
  description: `Лікар—психолог, танце—руховий терапевт, консультант в рамках майндфулнес, КПТ та психодрами, любляча та люблена донька, дружина і мама😊`,
  photo: '/img/volunteers/natalka.jpg'
}, {
  name: 'Іра',
  description: `Хей-хей, люди!✋🏻😏<br /><br />

  Мене звуть Іра. Навчаюсь в університеті Франка, майбутній соціолог. Шалено люблю кінний спорт, малювати та читати книги.
  Дарувати добро та обійми - це те, що я хочу робити для літніх людей.`,
  photo: '/img/volunteers/ira.jpg'
}, {
  name: 'Таня',
  description: `Всім привіт👐<br /><br />

  Я - Таня, студентка магістерської програми соціології Львівського національного університету імені Івана Франка<br /><br />
  
  Наука, книги, гори та музика- моє захоплення📚<br /><br />
  
  Вірю, що кожен день - це безцінний дар, то потрібно наповнювати його радістю, теплими обіймами та любов'ю. А літні люди особливо цього потребують. Тому я щаслива бути частинкою команди #старістьНАрадість`,
  photo: '/img/volunteers/tanya.jpg'
},];

export default ({
  data:
  { 
    NumbersData: { edges: [{ node: { frontmatter: numbersData } }] },
  }
}) => <div>
  <Slider />
  <News />
  <AboutUs />
  <PersonsList list={volunteers} />
  <Numbers {...numbersData} />

  <div className='dummy'></div>
</div>

export const pageQuery = graphql`
query HomePageData {
  NumbersData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "numbers_settings"} }}){
    edges{
      node{
        frontmatter {
          title
          blocks {
            title
            value
          }
        } 
      }
    }
  }
}
`;

