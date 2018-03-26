export class Article {
	title: string;
	link: string;
	votes: number;

	constructor(title: string, link: string, votes?: number) { // the ? in votes?: denotes an optional parameter
		this.title = title;
		this.link = link;
		this.votes = votes || 0; // the || denotes a defaul value
	}

	voteUp(): void {
		this.votes += 1;
	}

	voteDown(): void {
		this.votes -= 1;
	}

	// domain() is a util that extracts the domain from URL
	domain(): string {
		try {
			// http://domain.com/path/to/somewhere
			const domainAndPath: string = this.link.split('//')[1];

			// domain.com/path/to/somewhere
			return domainAndPath.split('/')[0];
		} catch (err) {
			return null;
		}
	}
}