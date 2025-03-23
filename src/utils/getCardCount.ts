
export const getCardCount = (difficulty: string) => {

    switch(difficulty) {
        case 'Easy':
            return 8

            case 'Medium':
                return 12

                case 'Hard':
                    return 16

                default: 
                    return 8
    }
}