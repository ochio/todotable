import todoData from './todoData';

const handleCard = {
	update(target: HTMLElement) {
		todoData.update(target);
	},
	delete(target: HTMLElement) {
		target.remove();
		todoData.delete(target);
	},
};

export default handleCard;
