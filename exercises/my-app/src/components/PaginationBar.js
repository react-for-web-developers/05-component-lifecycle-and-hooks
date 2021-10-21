

function PaginationBar({moveBack, moveForward}) {


    return (

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" onClick={moveBack}>Previous</a></li>
            <li className="page-item"><a className="page-link" href="#" onClick={moveForward}>Next</a></li>
          </ul>
        </nav>
        
        );

}


export default PaginationBar;