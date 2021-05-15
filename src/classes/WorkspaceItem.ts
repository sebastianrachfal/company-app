import { IconType } from 'react-icons/lib';

export default class WorkspaceItem {
	name: string;
	Icon: IconType;
	imgSrc: string;
	constructor(name: string, icon: IconType, imgSrc: string) {
		this.name = name;
		this.Icon = icon;
		this.imgSrc = imgSrc;
	}
}
