export class SocialNetworkQueries {

    constructor({ fetchCurrentUser }) {
        this.fetchCurrentUser = fetchCurrentUser;
        this.emptyBooks = Promise.resolve({ books: [] });
    }

    async findPotentialLikes({ minimalScore } = {}) {
        const { friends } = await this.fetchCurrentUser

        if (this.hasNoFriends(friends)) return this.emptyBooks;

        if (Boolean(friends) && Boolean(friends.length)) {
            if (this.friendsLikedNoBooks(friends)) {
                return this.emptyBooks;
            } else {
                const books = ['The Great Gatsby', 'Don Quixote', 'War and Peace'];
                return Promise.resolve({ books })
            }
        } else {
            return this.emptyBooks;
        }

        // if (!friends) return this.emptyBooks;
        // if (friends.length === 0) return this.emptyBooks;


        // if (this.hasFriends(friends)) {
        //     // if (this.friendsLikedNoBooks(friends)) {
        //     //     return this.emptyBooks;
        //     // } else {
        //     const books = ['The Great Gatsby', 'Don Quixote', 'War and Peace'];
        //     return Promise.resolve({ books })
        //     // }
        // } else {
        //     return this.emptyBooks;
        // }

        // const books = ['The Great Gatsby', 'Don Quixote', 'War and Peace'];
        // const books = ['The Great Gatsby', 'Don Quixote', 'War and Peace'];
        // return Promise.resolve({ books })
    }

    hasNoFriends(friends) {
        if (Boolean(friends) && friends.length > 0) return false;

        // return  || !Boolean(friends.length)
        // if (!friends) return true;
        // return !Boolean(friends.length);
    }

    friendsLikedNoBooks(friends) {
        const friendsBooks = [];

        for (const friend of friends) {
            friend.likes.books.forEach(book => friendsBooks.push(Boolean(book)))
        }

        return friendsBooks.every(book => !book);
    }

    computePotentialLikes() {

    }
}
