import { intersection } from "lodash";
import * as actions from "../actions/actionTypes";
import { getFromLocalStorage,addToLocalStorage } from './../../helpers/helpers';
let init=getFromLocalStorage('cards');
if(init===null || init===[]){

 init = [
	{
		title: "Best Of Paris In 7 Days Tour",
		price: "1,995",
		src: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
		dec: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eveniet a laudantium cumque ducimus modi earum dolores, quas possimus incidunt exercitationem deserunt doloribus fugit repellendus, id necessitatibus aliquam? Velit, deserunt.
        Ea architecto voluptas voluptatem, harum doloremque ullam facere dolorum animi hic et quod iusto veritatis porro sed officiis sapiente corporis necessitatibus ab, natus ratione iure quaerat tempore aut! Voluptatum, ab!
        Quis blanditiis saepe totam omnis enim iusto, libero aliquid placeat explicabo deserunt quidem culpa provident excepturi porro doloremque id ea fugit eius? Vitae nulla eveniet maiores? Ex quaerat aliquam corporis`,
	},
	{
		title: "Best Of Ireland In 14 Days Tour",
		price: "3,895",
		src: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
		dec: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsa. Totam quo maiores, incidunt nisi facere expedita deserunt repudiandae laudantium fugiat sit. Magnam, tempore? Praesentium perferendis velit ipsa vel perspiciatis.
        Ad totam animi reprehenderit distinctio nemo possimus fuga assumenda sapiente impedit officia similique facere vero, rerum qui inventore repellat aliquam fugiat, rem ducimus eveniet iusto? Ipsum iste dolore porro harum!
        Veritatis, officia veniam. Sit labore eaque cum rerum, laboriosam distinctio corporis iure quod ratione magni accusantium pariatur non debitis, fuga quam inventore enim sequi autem. Adipisci labore quia tenetur excepturi.
        Ut, temporibus atque quae vitae libero dolores est dolor debitis laudantium reiciendis maiores repellat iusto rerum tempora consectetur aliquid, veritatis ipsa distinctio suscipit illum magnam obcaecati quod sequi. Esse, harum!`,
	},
	{
		title: "Best Of Salzburg & Vienna In 8 Days Tour",
		price: "2,695",
		src: "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
		dec: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsa. Totam quo maiores, incidunt nisi facere expedita deserunt repudiandae laudantium fugiat sit. Magnam, tempore? Praesentium perferendis velit ipsa vel perspiciatis.
        Ad totam animi reprehenderit distinctio nemo possimus fuga assumenda sapiente impedit officia similique facere vero, rerum qui inventore repellat aliquam fugiat, rem ducimus eveniet iusto? Ipsum iste dolore porro harum!
        Veritatis, officia veniam. Sit labore eaque cum rerum, laboriosam distinctio corporis iure quod ratione magni accusantium pariatur non debitis, fuga quam inventore enim sequi autem. Adipisci labore quia tenetur excepturi.
        Ut, temporibus atque quae vitae libero dolores est dolor debitis laudantium reiciendis maiores repellat iusto rerum tempora consectetur aliquid, veritatis ipsa distinctio suscipit illum magnam obcaecati quod sequi. Esse, harum!`,
	},
	{
		title: "Best Of Rome In 7 Days Tour",
		price: "2,095",
		src: "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
		dec: `Amet reprehenderit non sint occaecat consequat nulla ullamco nisi ea quis mollit. Dolor do est aliqua quis tempor in anim fugiat reprehenderit Lorem aute. Minim nostrud ut cillum dolor adipisicing voluptate fugiat magna tempor aute occaecat. Anim pariatur laboris elit ut et ullamco.
        Esse sit do Lorem fugiat amet cillum eiusmod laborum ea nostrud laboris. Laboris minim eu voluptate elit ex eu cupidatat labore consectetur velit. Pariatur esse voluptate Lorem tempor consequat consectetur. Amet veniam magna proident et ea quis cillum reprehenderit aliqua exercitation officia. Excepteur culpa dolor non excepteur ut nisi.
Eiusmod dolor voluptate non aute culpa dolore commodo eu officia magna enim duis. Enim voluptate incididunt duis ad eu do. Fugiat elit aute consequat ut voluptate nulla consequat Lorem magna reprehenderit amet enim eu. Nostrud veniam dolor enim ullamco consequat ut fugiat sint laborum deserunt. Adipisicing id aliqua sunt fugiat. Laborum laboris duis laboris ut aute enim irure velit. Nisi aute voluptate esse nulla minim proident labore.
Aliquip eu mollit incididunt aliquip laborum non elit sint consequat ut. Excepteur laborum ut do excepteur veniam laboris qui. Incididunt Lorem Lorem ipsum dolor exercitation amet sint irure. Consequat ea minim excepteur ut.
Exercitation consectetur sit cillum labore dolor laborum culpa proident aliquip excepteur excepteur proident in. Cillum sunt veniam deserunt occaecat aute amet sint deserunt dolore veniam proident minim aute. In deserunt commodo non ut ipsum fugiat proident id cillum aliqua sint. Amet esse sint veniam deserunt ea irure do. Aliqua culpa sit cillum magna irure nulla non elit incididunt cillum consequat ea incididunt. Proident do laborum ex eu enim ad duis sint esse mollit nostrud ut et. Incididunt do dolor nisi pariatur incididunt amet.
Sunt deserunt pariatur velit fugiat et. Pariatur adipisicing tempor veniam elit laboris ullamco excepteur dolor consectetur occaecat. Do occaecat minim cupidatat laborum occaecat.`,
	},
	{
		title: "Best Of Poland In 10 Days Tour",
		price: "2,595",
		src: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
		dec: `Occaecat quis sit elit ipsum reprehenderit dolore consequat cillum magna consequat reprehenderit ad culpa. Id magna exercitation elit aliquip esse. Ad aliqua reprehenderit id exercitation ea veniam amet. Incididunt commodo dolor voluptate culpa Lorem nisi cillum consectetur id fugiat. Cillum ad amet minim deserunt adipisicing sunt eiusmod Lorem ut fugiat ad tempor voluptate anim. Cupidatat elit enim do sunt consectetur sit ipsum.`,
	},
];

init.forEach(item=>addToLocalStorage('cards',item));
}

const cardReducer = (state = init, action) => {
	switch (action.type) {
		case actions.ADD_CARD:
			return [...state, action.payload];
		case actions.REMOVE_CARD: {
			const newState = state.filter((item) => item.title !== action.payload);
			return newState;
		}
		default:
			return state;
	}
};
export default cardReducer;
