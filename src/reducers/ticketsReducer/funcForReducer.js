export const sortTickets = (ticketList, sort) =>
    ticketList
        .slice()
        .sort(
            (
                { price: firstPrice, segments: firstSegments },
                { price: secondPrice, segments: secondSegments },
            ) => {
                const firstDuration =
                    firstSegments[0].duration + firstSegments[1].duration;
                const secondDuration =
                    secondSegments[0].duration + secondSegments[1].duration;
                if (sort === 'cheap') {
                    return firstPrice - secondPrice;
                }
                if (sort === 'speed') {
                    return firstDuration - secondDuration;
                }
                return (
                    firstDuration * 50 +
                    firstPrice -
                    (secondDuration * 50 + secondPrice)
                );
            },
        );

export const performFiltering = (ticketList, filterList) => {
    const resultList = [];

    if (filterList[0] === 'all') {
        return ticketList;
    }

    filterList.forEach((filter) => {
        const newList = ticketList.filter((ticket) => {
            const { segments } = ticket;
            if (
                segments[0].stops.length === filter ||
                segments[1].stops.length === filter
            ) {
                return true;
            }
            return false;
        });

        resultList.push(...newList);
    });

    return resultList;
};
