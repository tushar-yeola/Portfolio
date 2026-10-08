interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/#home",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: "/#about",
		has_dropdown: false,
	},

	{
		id: 4,
		title: "Projects",
		link: "/#portfolio",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "Certifications",
		link: "/#certifications",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Contact",
		link: "/#contact",
		has_dropdown: false,
	},
];
export default menu_data;
