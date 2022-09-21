const connection = require('../../../db/db');
 
const LookUpsIdCountries = (req, res) => {
    const { lookUpId } = req.params;

    const query = `select * from countries`;

    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err,
            });
        }
        if (lookUpId == '231')
        return res.status(200).json({
            success: true,
            message: `get all Countries is done`,
            countries: result
        });
        else
        return res.status(500).json({
            success: false,
            message: `There is wrong in lookup id code.`,
        });
    })
}
module.exports = {LookUpsIdCountries}
