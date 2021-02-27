import Request from './request-service';

class Tickets {
    static getSearchId = () =>
        Request.getRequest('https://front-test.beta.aviasales.ru/search').then(
            ({ searchId }) => searchId,
        );

    static getTickets = (searchId) => {
        const result = Request.getRequest(
            `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`,
        );

        return result;
    };
}

export default Tickets;
