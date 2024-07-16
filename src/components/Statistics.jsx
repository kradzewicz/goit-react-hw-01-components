import css from '../css/Statistics.module.css';
import PropTypes from 'prop-types';
import data from '../data/data.json';

export const Statistics = () => {
  return (
    <section className={css.statisticBox}>
      <ul className={css.statisticList}>
        {data.map(stat => (
          <li className={css.statisticItem} key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
