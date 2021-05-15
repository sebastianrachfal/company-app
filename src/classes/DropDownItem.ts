import { IconType } from 'react-icons/lib';

export default class DropDownItem {
	name: string;
	ItemIcon: IconType;
	href: string;
	constructor(name: string, icon: IconType, href: string) {
		this.name = name;
		this.ItemIcon = icon;
		this.href = href;
	}
}
