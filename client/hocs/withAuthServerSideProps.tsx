import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export function withAuthServerSideProps<Q>(
  getServerSidePropsFunc?: GetServerSideProps<Q>
) {
  return async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const response = await axios.get<CurrentUserResponse>(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: context.req.headers
      }
    );

    console.log('withAuth - response: ', response);

    const {
      data: { currentUser }
    } = response;
    const props = { currentUser };

    console.log('withAuth - props: ', props);

    if (!getServerSidePropsFunc) {
      return { props };
    }

    const result = (await getServerSidePropsFunc(context)) as { props: Q };

    console.log('withAuth - results: ', result);

    if (result && result.props) {
      return { props: { ...props, ...result.props } };
    }
  };
}