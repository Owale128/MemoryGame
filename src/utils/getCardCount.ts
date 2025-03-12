
export const getCardCount = (difficulty: string | null) => {

    switch(difficulty) {
        case 'Easy':
            return 4

            case 'Medium':
                return 6

                case 'Hard':
                    return 8

                default: 
                    return 6
    }
}