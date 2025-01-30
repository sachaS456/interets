import PropTypes from "prop-types";

export default function ListOperation({operations}) {
    const operationsTypes = ['Dépôt', 'Retrait'];

    return (
        <ul>
            {operations.map((operation, index) => {
                return (
                    <li key={index}>
                        <span>{operation.get('date')}</span> - <span>{operation.get('value')} €</span> - <span>{operationsTypes[operation.get('type')]}</span>
                    </li>
                )
            })}
        </ul>
    )
}

ListOperation.propTypes = {
    operations: PropTypes.array
}