import { IconType } from 'react-icons/lib';

export default class DropDownItem {
	name: string;
	ItemIcon: IconType;
	color: string;
	constructor(name: string, icon: IconType, color: string) {
		this.name = name;
		this.ItemIcon = icon;
		this.color = color;
	}
}
