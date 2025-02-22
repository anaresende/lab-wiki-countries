import { Link } from 'react-router-dom';

export default function Countries({ countryData }) {
  console.log(countryData);
  return (
    <div className="col-5" /*style="max-height: 90vh; overflow: scroll"*/>
      <div className="list-group">
        {countryData.map((country) => {
          return (
            <Link
              to={'/' + country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                src={
                  'https:www.countryflags.io/' +
                  country.alpha2Code +
                  '/flat/32.png'
                }
                alt=""
              />
              <br />
              <p>{country.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

//   className={`film-row-fave ${isFaveClass}`}
